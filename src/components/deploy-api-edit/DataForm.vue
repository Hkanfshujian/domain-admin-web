<template>
  <div>
    <el-form
      ref="form"
      :model="deployForm"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item
        :label="$t('远程URL')"
        prop="url"
      >
        <div class="flex flex-1">
          <el-input
            class="flex-1"
            v-model="deployForm.url"
          ></el-input>

          <el-button
            class="ml-sm"
            type="primary"
            @click="handleDeploy"
            >部署</el-button
          >

          <a
            class="ml-sm text-sm mo-link flex items-center justify-end"
            href="https://domain-admin.readthedocs.io/zh-cn/latest/manual/ssl-cert.html#id4"
            target="_blank"
          >
            <el-icon><Warning /></el-icon>
            <span>&nbsp;查看接口文档</span>
          </a>
        </div>
      </el-form-item>

      <el-form-item
        :label="$t('请求头')"
        prop="headers"
      >
        <CodeEditor
          v-model="deployForm.headers"
          height="200px"
          :placeholder="`示例: \n${headerExample}`"
        ></CodeEditor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// created at 2023-07-23
import { jsonObjectValidator } from '@/utils/validator.js'
import CodeEditor from '@/components/code-editor/CodeEditor.vue'

export default {
  name: 'DownloadStepByAPI',

  props: {
    certId: {
      type: String,
    },
    form: {
      type: Object,
    },
    issueCertificate: {
      type: Object,
    },
  },

  emits: ['on-success', 'on-close'],

  components: {
    CodeEditor,
  },

  data() {
    return {
      deployForm: {
        url: '',
        headers: '',
      },

      rules: {
        url: [
          {
            message: '远程URL不能为空',
            required: true,
            trigger: 'blur',
          },
        ],

        headers: [
          {
            validator: jsonObjectValidator,
            trigger: 'blur',
          },
        ],
      },

      headerExample: JSON.stringify(
        {
          'X-Token': 'TOKEN',
        },
        null,
        4
      ),
    }
  },

  computed: {},

  methods: {
    async getData() {
      // console.log(JSON.stringify(this.issueCertificate))
      const params = {
        certificate_id: this.certId
      }

      const res = await this.$http.getDeployWebhook(params)
      if(res.ok && res.data){
        this.deployForm.url = res.data.url
        this.deployForm.headers = res.data.headers ? JSON.stringify(
          res.data.headers,
        null,
        4
      ): this.headerExample
      }
     
    },

    handleClose() {
      this.$emit('on-close')
    },

    async handleDeploy(hostRow) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.confirmSubmit(hostRow)
        } else {
          return false
        }
      })
    },

    async confirmSubmit() {
      let loading = this.$loading({ fullscreen: true })

      let params = {
        // 域名列表
        certificate_id: this.certId,
        headers: this.deployForm.headers
          ? JSON.parse(this.deployForm.headers)
          : null,
        url: this.deployForm.url,
      }

      const res = await this.$http.deployCertificateByWebhook(params)

      if (res.ok) {
        this.$msg.success('操作成功：' + res.data.result)
      } else {
        this.$msg.error(res.msg)
      }

      this.$nextTick(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        loading.close()
      })

      this.$emit('on-submit')
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped></style>

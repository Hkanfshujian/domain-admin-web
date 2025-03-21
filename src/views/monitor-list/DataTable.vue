<template>
  <div>
    <el-table
      :data="list"
      stripe
      border
      @selection-change="$emit('selection-change', $event)"
    >
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="40"
        :selectable="handleSelectable"
      />

      <!-- <el-table-column
        label="ID"
        align="center"
        prop="id"
        width="60"
      >
        <template #default="scope">
          <span>{{ scope.row.id || '-' }}</span>
        </template>
      </el-table-column> -->

      <!-- 标题 -->
      <el-table-column
        :label="$t('名称')"
        header-align="center"
        align="center"
        prop="title"
      >
        <template #default="scope">
          <span>{{ scope.row.title || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 监控类型 -->
      <el-table-column
        :label="$t('监控类型')"
        header-align="center"
        align="center"
        prop="monitor_type"
        width="100"
      >
        <template #default="scope">
          <span>{{ scope.row.monitor_type_label || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 监控参数 -->
      <!-- <el-table-column
        label="监控参数"
        header-align="center"
        align="center"
        prop="content"
      >
        <template #default="scope">
          <span>{{ scope.row.content || '-' }}</span>
        </template>
      </el-table-column> -->

      <!-- 检测频率 -->
      <el-table-column
        
        :label="$t('检测频率')"
        header-align="center"
        align="center"
        prop="interval"
        width="120"
      >
        <template #default="scope">
          <span>{{ scope.row.interval_label || '-' }}</span>
        </template>
      </el-table-column>

    
      <!-- 状态 -->
      <el-table-column
        :label="$t('状态')"
        header-align="center"
        align="center"
        prop="status"
        width="100"
      >
        <template #header>
          <el-tooltip
            effect="dark"
            content="点击下方图标可前往监控日志页面查看详情"
            placement="top-start"
            :show-after="800"
          >
            <div class="inline-flex items-center">
              <span class="mr-[2px]">{{ $t('状态') }}</span>
              <el-icon><Warning /></el-icon>
            </div>
          </el-tooltip>
        </template>

        <template #default="scope">
          <ConnectStatus
            :value="scope.row.status_value"
            @on-click="handleOpenLogClick(scope.row)"
          ></ConnectStatus>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('日志')"
        header-align="center"
        align="center"
        prop="interval"
        width="100"
      >
        <template #header>
          <el-tooltip
            effect="dark"
            content="点击下方编号可前往监控日志页面查看详情"
            placement="top-start"
            :show-after="800"
          >
            <div class="inline-flex items-center">
              <span class="mr-[2px]">{{ $t('日志') }}</span>
              <el-icon><Warning /></el-icon>
            </div>
          </el-tooltip>
        </template>

        <template #default="scope">
          <el-link
            v-if="scope.row.log_count && scope.row.log_count > 0"
            :underline="false"
            @click="handleOpenLogClick(scope.row)"
            >{{ scope.row.log_count }}</el-link
          ><span v-else>-</span>
        </template>
      </el-table-column>

      <!-- 下次运行时间 -->
      <el-table-column
        
        :label="$t('下次运行时间')"
        header-align="center"
        align="center"
        prop="next_run_time"
        width="180"
      >
        <template #default="scope">
          <span>{{ scope.row.next_run_time || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 操作 -->
      <el-table-column
        
        :label="$t('启用')"
        header-align="center"
        align="center"
        width="80"
      >
        <template #default="scope">
          <el-switch
            v-model="scope.row.is_active"
            @change="handleStatusChange(scope.row, $event)"
          />
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('操作')"
        width="80"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            @click="handleEditRow(scope.row)"
            ><el-icon><Edit /></el-icon
          ></el-link>

          <el-popconfirm
            :title="`${$t('确定删除')}？`"
            @confirm="handleDeleteClick(scope.row)"
          >
            <template #reference>
              <el-link
                :underline="false"
                type="danger"
                ><el-icon><Delete /></el-icon
              ></el-link>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑框 -->
    <DataFormDialog
      v-model:visible="dialogVisible"
      :row="currentRow"
      @on-success="handleUpdateSuccess"
    ></DataFormDialog>
  </div>
</template>

<script>
/**
 * created 2024-01-28
 */
import DataFormDialog from '../../components/monitor-edit/DataFormDialog.vue'
import ConnectStatus from '../../components/ConnectStatus.vue'

export default {
  name: '',

  components: {
    DataFormDialog,
    ConnectStatus,
  },

  props: {
    list: {
      type: Array,
    },
  },

  computed: {},

  data() {
    return {
      currentRow: null,
      dialogVisible: false,
    }
  },

  methods: {
    handleEditRow(row) {
      this.currentRow = row
      this.dialogVisible = true
    },

    async handleDeleteClick(row) {
      let params = {
        monitor_id: row.id,
      }

      const res = await this.$http.removeMonitorById(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    async handleStatusChange(row, value) {
      let params = {
        monitor_id: row.id,
        is_active: value,
      }

      const res = await this.$http.updateMonitorActive(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    handleUpdateSuccess() {
      this.$emit('on-success')
    },

    handleOpenLogClick(row) {
      this.$router.push({
        name: 'log-monitor-list',
        query: {
          monitorId: row.id,
        },
      })
    },

    handleSelectable(row, index) {
      return true
      // return row.has_edit_permission
    },
  },

  created() {},
}
</script>

<style lang="less"></style>

<style lang="less" scoped></style>

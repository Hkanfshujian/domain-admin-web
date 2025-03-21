<template>
  <div>
    <el-table
      stripe
      border
      v-bind="$attrs"
      @sort-change="$emit('sort-change', $event)"
      @selection-change="$emit('selection-change', $event)"
    >
      <el-table-column
        v-if="role == RoleEnum.User"
        type="selection"
        header-align="center"
        align="center"
        width="40"
        :selectable="handleSelectable"
      />

      <!-- 域名 -->
      <el-table-column
        :label="$t('域名')"
        header-align="center"
        align="center"
        width="230"
        show-overflow-tooltip
        prop="domain"
        fixed
      >
        <template #default="scope">
          <el-link
            :underline="false"
            @click="handleShowDetail(scope.row)"
            >{{ scope.row.domain }}</el-link
          >
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('域名天数')"
        header-align="center"
        align="center"
        width="90"
        sortable="custom"
        prop="domain_expire_days"
      >
        <template #default="scope">
          <ExpireDays :value="scope.row.real_domain_expire_days"></ExpireDays>
        </template>
      </el-table-column>

      <!-- 证书个数 -->
      <el-table-column
        :label="$t('证书数量')"
        header-align="center"
        align="center"
        width="100"
      >
        <template #header>
          <el-tooltip
            effect="dark"
            content="点击下方数字可前往证书监控页面查看详情"
            placement="top-start"
            :show-after="800"
          >
            <div class="inline-flex items-center">
              <span class="mr-[2px]">{{ $t('证书数量') }}</span>
              <el-icon><Warning /></el-icon>
            </div>
          </el-tooltip>
        </template>

        <template #default="scope">
          <el-link
            v-if="scope.row.ssl_count && scope.row.ssl_count > 0"
            :underline="false"
            @click="handleCertCountClick(scope.row)"
            >{{ scope.row.ssl_count }}</el-link
          >
          <span v-else>-</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('到期时间')"
        header-align="center"
        align="center"
        width="160"
        show-overflow-tooltip
        prop="domain_expire_time"
      >
      </el-table-column>

      <!-- 分组 -->
      <el-table-column
        :label="$t('分组')"
        header-align="center"
        align="center"
        width="100"
        sortable="custom"
        prop="group_name"
      >
        <template #default="scope">
          <span>{{ scope.row.group_name || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 标签 -->
      <el-table-column
        :label="$t('标签')"
        header-align="center"
        align="left"
        width="100"
        prop="tags"
        show-overflow-tooltip
      >
        <template #default="scope">
          <template v-if="scope.row.tags && scope.row.tags.length > 0">
            <template v-for="(tag, index) in scope.row.tags">
              <div class="domain-info-list__table__tag">
                <el-tag
                  @click="handleTagClick(tag)"
                  class="cursor-pointer"
                  >{{ tag }}</el-tag
                >
              </div>
            </template>
          </template>

          <span v-else>-</span>
        </template>
      </el-table-column>

      <!-- 备注 -->
      <el-table-column
        :label="$t('备注')"
        header-align="center"
        align="left"
        prop="comment"
        min-width="100"
        show-overflow-tooltip
      >
        <template #default="scope">
          <span>{{ scope.row.comment || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 主办单位名称 -->
      <el-table-column
        v-if="tableColumns.includes('icp_company')"
        :label="$t('主办单位名称')"
        header-align="center"
        align="left"
        width="200"
        prop="icp_company"
        show-overflow-tooltip
      >
        <template #default="scope">
          <span>{{ scope.row.icp_company || '-' }}</span>
        </template>
      </el-table-column>

      <!-- ICP备案 -->
      <el-table-column
        v-if="tableColumns.includes('icp_licence')"
        :label="$t('ICP备案')"
        header-align="center"
        align="left"
        width="200"
        prop="icp_licence"
        show-overflow-tooltip
      >
        <template #default="scope">
          <span>{{ scope.row.icp_licence || '-' }}</span>
        </template>
      </el-table-column>

      <!-- 更新ICP -->
      <el-table-column
        v-if="tableColumns.includes('update_icp')"
        :label="$t('更新ICP')"
        header-align="center"
        align="center"
        width="100"
        prop="update_icp"
        show-overflow-tooltip
      >
        <template #default="scope">
          <!-- 更新 -->
          <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            @click="handleUpdateRowICP(scope.row)"
            ><el-icon><Refresh /></el-icon
          ></el-link>
        </template>
      </el-table-column>

      <!-- 负责人 -->
      <el-table-column
        v-if="role == RoleEnum.Admin"
        :label="$t('负责人')"
        header-align="center"
        align="center"
        width="80"
        prop="user_id"
        show-overflow-tooltip
      >
        <template #default="scope">
          <span>{{ scope.row.user_name }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column
        label="更新"
        width="60"
        header-align="center"
        align="center"
      >
        <template #default="scope">
          
        </template>
      </el-table-column> -->

      <!-- <el-table-column
        label="详细"
        header-align="center"
        align="center"
        width="60"
        prop="connect_status"
      >
        <template #default="scope">
         
        </template>
      </el-table-column> -->

      <!-- 更新时间 -->
      <el-table-column
        :label="$t('更新时间')"
        header-align="center"
        align="center"
        width="120"
        prop="update_time"
        sortable="custom"
        show-overflow-tooltip
      >
        <template #default="scope">
          <span>{{ scope.row.update_time_label || '-' }}</span>
        </template>
      </el-table-column>

      <template v-if="role == RoleEnum.User">
        <!-- 自动更新 -->
        <el-table-column
          :label="$t('自动更新')"
          width="120"
          header-align="center"
          align="center"
          sortable="custom"
          prop="is_auto_update"
        >
          <template #default="scope">
            <el-switch
              v-model="scope.row.is_auto_update"
              :disabled="!scope.row.has_edit_permission"
              @change="handleAutoUpdateStatusChange(scope.row, $event)"
            />
          </template>
        </el-table-column>

        <!-- 监测 -->
        <el-table-column
          :label="$t('到期提醒')"
          width="90"
          header-align="center"
          align="center"
          sortable="custom"
          prop="is_expire_monitor"
        >
          <template #default="scope">
            <el-switch
              v-model="scope.row.is_expire_monitor"
              :disabled="!scope.row.has_edit_permission"
              @change="handleMonitorStatusChange(scope.row, $event)"
            />
          </template>
        </el-table-column>
      </template>

      <el-table-column
        :label="$t('操作')"
        width="110"
        header-align="center"
        align="center"
        fixed="right"
      >
        <template #default="scope">
          <!-- <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            @click="handleShowDetail(scope.row)"
            ><el-icon><Tickets /></el-icon
          ></el-link> -->

          <!-- <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            @click="handleShowAddressListgDialog(scope.row)"
            ><el-icon><Files /></el-icon
          ></el-link> -->

          <!-- 导入子域证书 -->
          <el-popconfirm
            :title="`${$t('导入子域证书')}？`"
            @confirm="handleImportSubDomain(scope.row)"
          >
            <template #reference>
              <el-link
                class="mr-sm"
                :underline="false"
                type="primary"
                ><el-icon><RefreshLeft /></el-icon
              ></el-link>
            </template>
          </el-popconfirm>

          <!-- 更新 -->
          <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            @click="handleUpdateRowDomainInfo(scope.row)"
            ><el-icon><Refresh /></el-icon
          ></el-link>

          <el-link
            :underline="false"
            type="primary"
            class="mr-sm"
            :disabled="!scope.row.has_edit_permission"
            @click="handleEditRow(scope.row)"
            ><el-icon><Edit /></el-icon
          ></el-link>

          <el-popconfirm
            :title="`${$t('确定删除')}？`"
            @confirm="handleDeleteClick(scope.row)"
            :disabled="!scope.row.has_edit_permission"
          >
            <template #reference>
              <el-link
                :underline="false"
                type="danger"
                :disabled="!scope.row.has_edit_permission"
                ><el-icon><Delete /></el-icon
              ></el-link>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>

      <!-- <el-table-column
        label="删除"
        width="60"
        align="center"
        prop="tag"
      >
        <template v-slot="{ row }">
          
        </template>
      </el-table-column> -->
    </el-table>

    <!-- 编辑框 -->
    <DataFormDialog
      v-model:visible="dialogVisible"
      :row="currentRow"
      :role="role"
      @on-success="handleRefreshRow(currentRow)"
    ></DataFormDialog>

    <!-- 详情 -->
    <DataDetailDialog
      :row="currentRow"
      :role="role"
      v-model:visible="dialogDetailVisible"
      @on-success="handleRefreshRow(currentRow)"
    ></DataDetailDialog>

    <!-- 域名主机列表 -->
    <AddressListgDialog
      v-if="currentRow"
      :domainId="currentRow.id"
      :role="role"
      v-model:visible="AddressListgDialogVisible"
      @on-success="handleUpdateSuccess"
    ></AddressListgDialog>
  </div>
</template>

<script>
/**
 * created 2022-10-01
 */
import DataFormDialog from '../domain-info-edit/DataFormDialog.vue'
import DataDetailDialog from '../domain-info-detail/DataFormDailig.vue'

import ExpireDays from '@/components/ExpireDays.vue'
import ExpireProgress from '@/components/ExpireProgress.vue'

import AddressListgDialog from '@/components/address-list/DataTableDialog.vue'
import { RoleEnum } from '@/emuns/role-enums.js'
import { getTableColumn } from './table-column.js'

export default {
  name: '',

  components: {
    DataFormDialog,
    DataDetailDialog,

    ExpireDays,
    ExpireProgress,

    AddressListgDialog,
  },

  emits: ['on-success', 'selection-change', 'sort-change', 'on-refresh-row'],

  props: {
    role: {
      type: Number,
    },

    // 表格列
    tableColumns: {
      type: Array,
      default: () => {
        return []
      },
    },
  },

  computed: {},

  data() {
    return {
      // tableColumns: [],
      RoleEnum,
      currentRow: null,
      dialogVisible: false,
      dialogDetailVisible: false,

      AddressListgDialogVisible: false,
    }
  },

  methods: {
    handleEditRow(row) {
      this.currentRow = row
      this.dialogVisible = true
    },

    async handleDeleteClick(row) {
      let params = {
        domain_info_id: row.id,
      }

      const res = await this.$http.deleteDomainInfoById(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    async handleStatusChange(row) {
      let params = {
        id: row.id,
      }

      const res = await this.$Http.function(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    async handleMonitorStatusChange(row, value) {
      // console.log(row, value)

      let params = {
        domain_info_id: row.id,
        field: 'is_expire_monitor',
        value: value,
      }

      const res = await this.$http.updateDomainInfoFieldById(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        // this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    async handleAutoUpdateStatusChange(row, value) {
      // console.log(row, value)

      let params = {
        domain_info_id: row.id,
        field: 'is_auto_update',
        value: value,
      }

      const res = await this.$http.updateDomainInfoFieldById(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        // this.$emit('on-success')
      } else {
        this.$msg.error(res.msg)
      }
    },

    async handleUpdateRowDomainInfo(row) {
      let loading = this.$loading({
        lock: true,
        text: '更新中',
      })

      let params = {
        domain_info_id: row.id,
      }

      const res = await this.$http.updateDomainInfoRowById(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.$emit('on-success')
      }

      loading.close()
    },

    handleUpdateSuccess() {
      this.$emit('on-success')
    },

    handleDetailSuccess() {
      // this.$emit('on-success')
    },

    handleShowDetail(row) {
      this.currentRow = row
      this.dialogDetailVisible = true
    },

    handleShowAddressListgDialog(row) {
      this.currentRow = row
      this.AddressListgDialogVisible = true
    },

    handleCertCountClick(row) {
      this.$router.push({
        name: 'cert-list',
        query: {
          monitorId: row.domain,
        },
      })
    },

    handleRefreshRow(row) {
      this.$emit('on-refresh-row', row)
    },

    handleSelectable(row, index) {
      return row.has_edit_permission
    },

    async handleUpdateRowICP(row) {
      let loading = this.$loading({
        lock: true,
        text: '更新中',
      })

      let params = {
        domain_info_id: row.id,
      }

      const res = await this.$http.updateDomainRowICP(params)

      if (res.code == 0) {
        this.$msg.success('操作成功')
        this.handleRefreshRow(row)
      }

      loading.close()
    },

    handleTagClick(tag) {
      this.$emit('on-tag-click', tag)
    },

    handleImportSubDomain(row) {
      
      this.$emit('on-import-sub-domain', [row.id])
    },
  },

  created() {
    // this.tableColumns = getTableColumn()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped>
.domain-info-list__table__tag + .domain-info-list__table__tag {
  margin-top: 4px;
}
</style>

export const dataTableMetaExampleCode = `<script setup lang="ts">
import DataTable from '@/components/common/DataTable.vue'
import CommonAlertDialog from '@/components/common/CommonAlertDialog.vue'
import { useOverlayStore } from '@/stores/overlay'
import { documentsColumns } from '@/utils/DocumentColumns'
import { documentExample } from '@/utils/example'

const overlay = useOverlayStore()

const openDelete = (doc) => {
  overlay.open("delete-doc-meta", { itemId: doc.id_documento })
}

const onConfirmDelete = (payload) => {
  console.log("Confirmado para id:", payload?.itemId)
}
</script>

<template>
  <div class="w-full">
    <DataTable 
      :columns="documentsColumns" 
      :data="documentExample" 
      :pagination="{ 
        type: 'advanced', 
        itemsPerPage: 10, 
        siblingCount: 2, 
        showEdges: true, 
      }" 
      :table-meta="{ openDelete }" 
      show-selection 
    /> 

    <CommonAlertDialog 
      id="delete-doc-meta" 
      title="Confirmar borrado" 
      description="¿Seguro que quieres borrar este documento?" 
      @action="onConfirmDelete" 
    />
  </div>
</template>
`;
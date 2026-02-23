<script setup lang="ts">
import DataTable from '@/components/common/DataTable.vue'
import CommonAlertDialog from '@/components/common/CommonAlertDialog.vue'
import { useOverlayStore } from '@/stores/overlay'
import { documentsColumns } from '@/utils/DocumentColumns'
import { documentExample, type LjCatDocumento } from '@/utils/example'

const overlay = useOverlayStore()

const openDelete = (doc: LjCatDocumento) => {
  overlay.open("delete-doc-meta-example", { itemId: doc.id_documento })
}

const onConfirmDelete = (payload: any) => {
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
      id="delete-doc-meta-example" 
      title="Confirmar borrado" 
      description="¿Seguro que quieres borrar este documento? Esta acción no se puede deshacer." 
      actionText="Borrar" 
      @action="onConfirmDelete" 
    />
  </div>
</template>

import type { ColumnDef } from "@tanstack/vue-table"
import type { LjCatDocumento } from "./example"
import { h } from "vue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-vue-next"

export type DocumentsTableMeta = {
  openDelete?: (doc: LjCatDocumento) => void
}

export const documentsColumns: ColumnDef<LjCatDocumento>[] = [
  { accessorKey: "id_documento", header: "ID", meta: { thClass: "bg-white", tdClass: "bg-white" } },
  { accessorKey: "nombre_doc", header: "Documento", meta: { thClass: "bg-white", tdClass: "bg-white" } },

  {
    accessorKey: "requiere_ia",
    header: "IA",
    cell: ({ getValue }) => {
      const v = getValue<boolean>()
      return h(Badge, { variant: v ? "default" : "secondary" }, () => (v ? "IA activada" : "IA desactivada"))
    },
    meta: { thClass: "bg-white", tdClass: "bg-white" },
  },

  { accessorKey: "frecuencia_dias", header: "Frecuencia (días)", meta: { thClass: "bg-white", tdClass: "bg-white" } },

  {
    accessorKey: "mensaje_notificacion",
    header: "Notificación",
    cell: ({ getValue }) =>
      h("div", { class: "max-w-[360px] truncate" }, String(getValue<string>() ?? "")),
    meta: { thClass: "bg-white", tdClass: "bg-white" },
  },

  {
    accessorKey: "es_fijo",
    header: "Tipo",
    cell: ({ getValue }) => {
      const v = getValue<boolean>()
      return h(Badge, { variant: v ? "default" : "secondary" }, () => (v ? "Fijo" : "Editable"))
    },
    meta: { thClass: "bg-white", tdClass: "bg-white" },
  },

  {
    id: "acciones",
    header: "Acciones",
    cell: ({ row, table }) => {
      const meta = table.options.meta as DocumentsTableMeta | undefined
      return h(
        Button,
        {
          variant: "destructive",
          size: "sm",
          class: "gap-2",
          onClick: () => meta?.openDelete?.(row.original),
        },
        { default: () => [h(Trash2, { class: "h-4 w-4" }), h("span", null, "Eliminar")] }
      )
    },
    enableSorting: false,
    enableHiding: false,
    meta: { thClass: "bg-white", tdClass: "bg-white" },
  },
]

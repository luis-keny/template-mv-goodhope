export interface LjCatDocumento {
  id_documento: number
  nombre_doc: string
  requiere_ia: boolean
  frecuencia_dias: number
  mensaje_notificacion: string
  es_fijo: boolean
}

export const documentExample: LjCatDocumento[] = [
  {
    id_documento: 1,
    nombre_doc: 'Contrato de Arrendamiento',
    requiere_ia: true,
    frecuencia_dias: 30,
    mensaje_notificacion: 'El contrato vence pronto, por favor revisar los términos.',
    es_fijo: true,
  },
  {
    id_documento: 2,
    nombre_doc: 'Factura de Servicios',
    requiere_ia: false,
    frecuencia_dias: 15,
    mensaje_notificacion: 'Pendiente de pago.',
    es_fijo: false,
  },
  {
    id_documento: 3,
    nombre_doc: 'Póliza de Seguro',
    requiere_ia: true,
    frecuencia_dias: 365,
    mensaje_notificacion: 'Renovación anual requerida.',
    es_fijo: true,
  },
]

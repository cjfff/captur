export interface MapItem extends Common {
  id: string
}
export interface ModelMapItem extends Common {
  modelMappingId: string
  modelMappingInitialId: string
  id: string
  modelMappingStatus: number
}
interface Common {
  name: string
  code: string
}

export interface ListItem {
  mainModel: MapItem
  mappingModels: ModelMapItem[]
}

// 详情
export interface DetailData {
  models: MapItem[]
  mappings: DetailMapingItem[]
}

export interface DetailMapingItem {
  mainField: DetailMappingFieldItem
  mappingFields: {
    targetField: DetailMappingFieldItem
    sourceFields: DetailMappingFieldItem[]
    expression: string
  }[]
  subMappings?: DetailMapingItem[]
  key?: string
  title?: string
}
export interface DetailMappingField {
  fields: DetailMappingFieldItem[]
  expression: string
}
export interface DetailMappingFieldItem {
  id: string
  name: string
  cname: string
  fullName: string
  category: string
  selfRef: boolean
  required: number
  minValue: string
  maxValue: string
  defaultValue: string
  example: string
  expression: string
}

export interface MappingItem {
  id?: string
  targetFieldId: string
  sourceFieldIds: string[]
  expression?: string
}
export interface UpdateMapDetailParams {
  sourceModelId: string
  targetModelId: string
  mappings: MappingItem[]
  versionNo?: string
  versionLog?: string
  isSnapshot?: boolean
  createTime?: number
  updateTime?: number
  createBy?: string
  updateBy?: string
  id?: string
}

export interface MappingDetailParams {
  id?: string // 映射id
  forward?: boolean
}

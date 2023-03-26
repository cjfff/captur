export default {
  /** 模型映射列表 */
  list: '/api/model/mapping/list',
  /** 查询模型映射历史列表 */
  history: '/api/model/mapping/list/history',
  /** 发布映射 */
  publish: '/api/model/mapping/publish',
  /** 增 */
  create: '/api/model/mapping/create',
  /** 删除 */
  delete: '/api/model/mapping/delete',
  /** 更新 */
  edit: '/api/model/mapping/update',
  /** 查询两个模型的映射信息 */
  get: '/api/model/mapping/get',
  /** 查询某个模型下的映射信息 */
  getGroup: '/api/model/mapping/getGroup',
  /** 查询某一模型下有映射关系的模型列表 */
  modelList: '/api/model/mapping/mapped/model/list',
  /** 从模型映射中查询校验配置 */
  mappingValidate: '/api/model/validation/listValidationFieldsByMapping',

  getStableModel: '/api/model/getStableModel',

  getEditInfo: '/api/model/mapping/getEditInfo',
}

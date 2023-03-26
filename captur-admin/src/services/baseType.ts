export interface BaseResponse<T> {
  code?: number
  message?: string
  success?: boolean
  data?: T
}

/** 分页 */
export interface BasePageResponse<R> extends BaseResponse<any> {
  data: {
    docs?: R[]
    totalDocs?: number
    offset?: number
    limit?: number
    totalPages?: number
    page?: number
    pagingCounter?: number
    hasPrevPage?: boolean
    hasNextPage?: boolean
    prevPage?: object
    nextPage?: object
  }
}

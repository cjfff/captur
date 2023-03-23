import i18n from '../../i18n'

export const rule = {
  email: [
    {
      validator: async (_, value) => {
        const length = value?.length
        if (!length) {
          throw Error(i18n.t('common.formValidRequired'))
        }
        // eslint-disable-next-line2
        if (value && !/^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(value)) {
          throw Error(i18n.t('common.formValidEmail'))
        }
        if (length > 64) {
          throw Error(i18n.t('common.formValidLengthLessThan', { length: 64 }))
        }
        return true
      },
    },
  ],
  description: [
    {
      validator: async (_, value) => {
        if (!value) return Promise.reject(i18n.t('common.input.placeholder'))
      },
    },
  ],
  policyRule: [
    {
      validator: async (_, value) => {
        if (!value) {
          return Promise.reject(i18n.t('feedback.agree.tips'))
        }
      },
    },
  ],
}

export default rule

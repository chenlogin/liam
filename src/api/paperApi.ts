/**
 * 接口封装
 */
import { get } from '../widgets/request'

const URL = {
  getPaperInfo: '/api/gem/math/pub/paper/info',
}

export const getPaperInfo = async (urlParam: { subject: string; paperId: string }) =>
  get({
    url: URL.getPaperInfo,
    params: {
      data: JSON.stringify({}),
    },
  })

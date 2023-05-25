import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    function doFetch() {
        // 가져오기 전 상태 재설정
        data.value = null
        error.value = null

        // unref() : ref의 래핑 해제
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }

    if (isRef(url)) {
        // 입력 URL이 ref인 경우 반응적 다시 가져오기
        watchEffect(doFetch)
    } else {
        // ref가 아니면 한 번만 가져와서 감시자 오버헤드 피하기
        doFetch()
    }
    
    return { data, error }
}
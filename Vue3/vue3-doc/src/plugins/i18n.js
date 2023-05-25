export default {
    install: (app, options) => {
        // 전역적으로 사용 가능한 $translate() 메서드 주입
        app.config.globalProperties.$translate = (key) => {
            // key 를 경로로 사용하여
            // options 에서 중첩 속성을 검색
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }

        app.provide('i18n', options)
    }
}
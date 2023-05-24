<template>
    <div>
        <p>메세지: {{ message }}</p>
        <input v-model="message" placeholder="메세지 입력하기" />
        <br>
        <input @input="inputEventHandler" :value="message" placeholder="IME 지원 메세지 입력하기"/>
        
        <div>
            <span>여러 줄 메세지:</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
        </div>

        <div>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
        </div>

        <div>
            <div>체크된 이름: {{ checkedNames }}</div>

            <input type="checkbox" id="jack" value="잭" v-model="checkedNames" />
            <label for="jack">잭</label>

            <input type="checkbox" id="john" value="존" v-model="checkedNames" />
            <label for="john">존</label>

            <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
            <label for="mike">마이크</label>
        </div>

        <div>
            <div>선택한 것: {{ picked }}</div>

            <input type="radio" id="one" value="하나" v-model="picked" />
            <label for="one">하나</label>

            <input type="radio" id="two" value="둘" v-model="picked" />
            <label for="two">둘</label>
        </div>

        <div>
            <div>선택됨: {{ selected }}</div>

            <select v-model="selected">
                <option disabled value="">다음 중 하나를 선택하세요</option>
                <option>가</option>
                <option>나</option>
                <option>다</option>
            </select>
        </div>

        <div>
            <div>선택됨: {{ selectedList }}</div>

            <select v-model="selectedList" multiple>
                <option>가</option>
                <option>나</option>
                <option>다</option>
            </select>
        </div>

        <div>
            <select v-model="selectedDynamic">
                <option v-for="(option, index) in options" :value="option.value" :key="index">
                    {{ option.text }}
                </option>
            </select>

            <div>선택됨: {{ selectedDynamic }}</div>
        </div>

        <div>
            <div>{{ toggle }}</div>
            <input
                type="checkbox"
                v-model="toggle"
                :true-value="dynamicTrueValue"
                :false-value="dynamicFalseValue" />
        </div>

        <div>
            <div>{{ pick }}</div>

            <input type="radio" v-model="pick" :value="first" />
            <input type="radio" v-model="pick" :value="second" />
        </div>

        <div>
            <div>{{ selected2 }}</div>

            <select v-model="selected2">
                <option :value="{ number: 123 }">123</option>
            </select>
        </div>

        <div>
            <div>수식어: {{ modifierMessage }}</div>
            <div>타입: {{ typeof modifierMessage }}</div>
            <div>|{{ modifierMessage }}| </div>

            <input v-model.lazy="modifierMessage" /><br>
            <input v-model.number="modifierMessage" /><br>
            <input v-model.trim="modifierMessage" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('')
let checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const selectedList = ref([])
const selectedDynamic = ref('1')

const options = ref([
    { text: '하나', value: '1' },
    { text: '둘', value: '2' },
    { text: '셋', value: '3' },
])

const toggle = ref('네')
const dynamicTrueValue = ref('hi')
const dynamicFalseValue = ref('hey')

const pick = ref('')
const first = 'first'
const second = 'second'

const selected2 = ref('')

const modifierMessage = ref('')


function inputEventHandler(event) {
    message.value = event.target.value
}
</script>

<style lang="scss" scoped>

</style>
import { ref, computed, onMounted } from "vue";

const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const numbers = '0123456789'
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

export const usePassword = () => {
  const password = ref("");
  const length = ref(1);

  const includeUppercase = ref(false);
  const includeLowercase = ref(false);
  const includeNumbers = ref(false);
  const includeSymbols = ref(false);

  const strengthScore = ref(0);
  const getStrength = () => {
    let count = 0;

    if (includeUppercase.value) {
      count += 1;
    }

    if (includeLowercase.value) {
      count += 1;
    }

    if (includeNumbers.value) {
      count += 1;
    }

    if (includeSymbols.value) {
      count += 1;
    }

    return Math.max(count, 1);
  };

  const options = computed(() => {
    const ops: string[] = []

    if (includeUppercase.value) {
      ops.push(upper)
    }

    if (includeLowercase.value) {
      ops.push(lower)
    }

    if (includeNumbers.value) {
      ops.push(numbers)
    }

    if (includeSymbols.value) {
      ops.push(symbols)
    }

    return ops
  })

  const genPassword = () => {
    let pass = ''
    for (let i = 0; i < length.value; i++) {
      const list = options.value[Math.floor(options.value.length * Math.random())]
      const char = list[Math.floor(list.length * Math.random())]
      pass += char
    }

    password.value = pass
    strengthScore.value = getStrength()
  }

  const onCopy = () => {
    navigator.clipboard.writeText(password.value)
  }

  onMounted(() => {
    genPassword()
  })

  return {
    password,
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,

    strengthScore,
    getStrength,
    genPassword,
    onCopy
  };
};

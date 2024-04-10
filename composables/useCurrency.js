export const useCurrency = (amount) => {
    const currency = computed(() => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'NZD'
        }).format(isRef(amount) ? amount.value : amount)
    })
    return {
      currency
    }
}
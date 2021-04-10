export const ExecutionEnvironment = {
    canUseDOM: !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    ),
}

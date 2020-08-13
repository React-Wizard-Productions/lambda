export type NoPayloadAction<T> = {
    type: T
}

export type Action<T,P> = {
    type: T,
    payload: P
}

export function createNoPayloadAction<T extends string>(type: T): NoPayloadAction<T> {
    return {type}
}

export function createAction<T extends string, P>(type: T, payload: P): Action<T,P> {
    return {type, payload}
}

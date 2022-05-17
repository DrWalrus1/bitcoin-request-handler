
type RPCError = {
    code: number,
    message: string
}

export type RPCResponse = {
    id: string
    response?: {
        
    }
    result?: string
    error: RPCError
    warning?: string
}

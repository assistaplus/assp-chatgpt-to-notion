import type { IconResponse, SelectPropertyResponse } from "./notion"

export type ToBeSaved = {
  prompt: string
  answer: string
  title: string
  url: string
  pin: number
} | null

export type Error = {
  code?: string | null
  message?: string | null
  status?: number | null
}

export type StoredDatabase = {
  id: string
  title: string
  icon: IconResponse
  propertiesIds: {
    title: string
    url: string
  }
  tags: {
    options: SelectPropertyResponse[]
    name: string
    id: string
    type: "select" | "multi_select"
  }[]
  tagIndex: number
  tagPropertyIndex: number
}

export type PopupEnum =
  | "index"
  | "save"
  | "settings"
  | "about"
  | "wrongpage"
  | "dbsettings"
  | "premium"
  | "history"
  | "error"

export type SaveBehavior = "override" | "append" | "ignore"

export type ChatConfig = {
  enabled: boolean
  targetPageId: string | null
  database: StoredDatabase | null
  lastSaveStatus: "success" | "error" | "generating" | null
  lastError: {
    message: string | null
    code: string | null
  } | null
}

export type AutosaveStatus =
  | "generating"
  | "saving"
  | "saved"
  | "error"
  | "disabled"

export type SaveStatus = "saving" | "saved" | "error" | "fetching" | null

// ChatGPT conversation as returned by the API
// We won't type more than we need obviously
export type Conversation = {
  title: string
  conversation_id: string
  mapping: Record<string, Message>
}

export type Message = {
  message?: {
    create_time: number
    author?: {
      role: string
      name: string
    }
    content: {
      content_type: string
      parts?: any[]
      text?: string
    }
    end_turn?: true
  }
  children?: string[]
}

export type HistorySaveError = {
  url: string
  title: string
  message: string
}

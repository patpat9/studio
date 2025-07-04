
export type ContentType = 'photo' | 'youtube' | 'audio' | 'text';

export interface ContentItem {
  id: string;
  type: ContentType;
  name: string;
  data: string; // URL for photo/youtube/audio (or data URI for uploaded), text content for text
  originalData?: string; // Store dataUrl for files, or original text/URL for others
  thumbnail?: string; // Data URI or URL
  summary?: string;
  createdAt: string; // Changed from Date to string (ISO date string)
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date; // This is fine as ChatMessage is typically created and managed client-side
  relatedContentId?: string; // Optionally link message to a piece of content
}

// Add type definition for SpeechRecognitionError event if not already globally available or imported
// This is a standard DOM type but might need explicit definition in some TypeScript setups.
export interface SpeechRecognitionError extends Event {
  error: string; // Or a more specific type like SpeechRecognitionErrorCode
  message: string;
}

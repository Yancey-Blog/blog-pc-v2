export interface IAnnouncement {
  content: string
}

export interface IMotto {
  content: string
}

export interface ICover {
  title: string
  coverUrl: string
}

export interface IOpenSource {
  title: string
  description: string
  url: string
  posterUrl: string
}

export interface AnnouncementQuery {
  getAnnouncements: IAnnouncement[]
}

export interface MottoQuery {
  getMottos: IMotto[]
}

export interface CoverQuery {
  getCovers: ICover[]
}

export interface OpenSourceQuery {
  getOpenSources: IOpenSource[]
}
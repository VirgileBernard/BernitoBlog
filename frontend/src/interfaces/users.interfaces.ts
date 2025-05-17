export interface UserLogin {
  username: string
  password: string
}

export interface UserProfile {
  id: number
  firstName: string
  lastName: string
  job: string
  bio: string
  avatar: string
  role: 'USER' | 'AUTHOR' | 'ADMIN'
  socials: object
}

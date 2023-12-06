export type Platforms = 'PS1' | 'PC' | 'XBOX'

export default interface Game {
	id: string
	title: string
	description: string
	img: string
	playedYear: number
	platforms: Platforms[]
}

export type Platforms = 'PS1' | 'PC'

export default interface Game {
	id: string
	title: string
	description: string
	img: string
	playedYear: number
	platform: Platforms
}

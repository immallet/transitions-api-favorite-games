import Game from '../@types/game'
import TwistedMetal from '../assets/twisted-metal.png'
import PacmanWorld from '../assets/pacman-world.jpg'
import ScoobyDoo from '../assets/scooby-doo.jpg'
import RollerCoaster from '../assets/roller-coaster.webp'
import Mercenaries from '../assets/mercenaries.png'
import DynastyWarrior from '../assets/dynasty-warriors.jpg'
import Metin2 from '../assets/metin2.png'
import Dota2 from '../assets/dota-2.png'
import Smite from '../assets/smite.png'
import NewWorld from '../assets/new-world.png'
import LeagueOfLegends from '../assets/lol.png'
import Valorant from '../assets/valorant.png'

export const GAMES: Game[] = [
	{
		id: 'twisted-metal',
		title: 'Twisted Metal 2',
		description:
			'Twisted Metal 2 (conocido en Europa como Twisted Metal 2: World Tour y Twisted Metal EX en Japón) es el segundo y más exitoso videojuego de la serie de combate con vehículos Twisted Metal. Ha sido desarrollado por el estudio de juegos SingleTrac, publicado por Sony, y se lanzó en 1996 para PlayStation y PC.',
		img: TwistedMetal,
		playedYear: 2004,
		platforms: ['PS1']
	},
	{
		id: 'pacman-world',
		title: 'Pacman World',
		description:
			'Pac-Man World 20th Anniversary (パックマンワールド 20th アニバーサリー?) es un videojuego de plataformas, sucesor del conocido juego Pac-Man 2: The New Adventures. Lanzado en el 20º aniversario de la creación de Pac-Man, el popular y famoso videojuego de arcade. Es un juego que consiste en plataformas libres de tres dimensiones, disponible para la consola PlayStation, desde el 15 de octubre de 1999, y para la Game Boy Advance, desde el 17 de noviembre de 2004.',
		img: PacmanWorld,
		playedYear: 2006,
		platforms: ['PS1']
	},
	{
		id: 'scooby-doo',
		title: 'Scooby-Doo and the Cyber Chase',
		description:
			'Scooby-Doo and the Cyber Chase (Scooby-Doo y la Persecución Cibernética en países hispanoparlantes) es una película de misterio de ciencia ficción humorística animada directa a vídeo de 2001, y la cuarta de una serie de películas animadas directamente a video basadas en las caricaturas de la mañana del sábado Scooby-Doo de Hanna-Barbera. Fue lanzado el 9 de octubre de 2001. La película fue producida por Hanna-Barbera Cartoons.',
		img: ScoobyDoo,
		playedYear: 2007,
		platforms: ['PS1']
	},
	{
		id: 'roller-coaster',
		title: 'Roller Coaster Tycoon Classic',
		description:
			'RollerCoaster Tycoon (RCT) es un videojuego de estrategia empresarial y construcción y gestión publicado el 31 de marzo de 1999. Fue desarrollado por el programador y diseñador Chris Sawyer,1​ el grafista Simon Foster y el compositor Allister Brimble y publicado por Hasbro Interactive (que fue vendida a Infogrames, más tarde conocida como Atari). A pesar del título, este juego trata sobre todo lo concerniente a un parque de atracciones y no sólo de las montañas rusas.',
		img: RollerCoaster,
		playedYear: 2009,
		platforms: ['PS1']
	},
	{
		id: 'mercenaries',
		title: 'Mercenaries payground of destruction',
		description:
			'Mercenarios: El arte de la destrucción (Título original en inglés, Mercenaries: Playground of destruction) es un videojuego de acción en tercera persona ambientado en un imaginario golpe de estado en Corea del Norte en septiembre de 2009. Fue sacado a la venta el 18 de febrero de 2005. Actualmente hay una secuela titulada Mercearios 2: World in flames, ambientada en Venezuela.',
		img: Mercenaries,
		playedYear: 2011,
		platforms: ['PS1']
	},
	{
		id: 'dynasty-warriors',
		title: 'Dynasty Warrior 6',
		description:
			"La historia del juego es una adaptación del clásico Romance de los Tres Reinos, aunque en ocasiones se toman ciertas libertades. El modo de juego de la serie Dynasty Warriors se basa en el género Beat'em up, pero en escenarios de dimensiones bastante grandes con gráficos en 3D y numerosos enemigos. El jugador selecciona a uno de los guerreros disponibles y entra en el campo de batalla para eliminar a un gran número de oponentes.",
		img: DynastyWarrior,
		playedYear: 2012,
		platforms: ['PS1']
	},
	{
		id: 'metin-2',
		title: 'Metin 2',
		description:
			'Metin2 es un MMORPG de acción en tiempo real, desarrollado por Ymir Entertainment y lanzado en Corea del Sur en 2004. Desde entonces ha sido distribuido en muchos países europeos, México, España y EUA por Gameforge 4D GmbH y en Singapur por TEC Interactive Pte. El juego es gratuito en todas sus versiones.',
		img: Metin2,
		playedYear: 2012,
		platforms: ['PC']
	},
	{
		id: 'dota-2',
		title: 'Dota 2',
		description:
			"Dota 2 (En español Defensa de los Ancestros 2) es un videojuego perteneciente al género de Arena de batalla en línea ARTS («estrategia de acción en tiempo real»), también conocido en inglés como MOBA, fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation. El título fue anunciado oficialmente el 13 de octubre de 2010, en un artículo en el sitio web Game Informer'. Generalmente Dota 2 se juega en partidas entre dos equipos de cinco jugadores, con cada equipo ocupando y defendiendo su propia base separada en el mapa. Cada uno de los diez jugadores controla de forma independiente a un poderoso personaje conocido como 'héroe' que tiene habilidades únicas y diferentes estilos de juego.",
		img: Dota2,
		playedYear: 2014,
		platforms: ['PC']
	},
	{
		id: 'smite',
		title: 'Smite',
		description:
			'SMITE es un videojuego de acción MOBA en tercera persona, creado y publicado por Hi-Rez Studios para Microsoft Windows, Xbox One, PlayStation 4 y Nintendo Switch. El juego se basa en dos equipos, cada uno formado por cinco dioses, enfrentados en un campo de batalla con la finalidad de destruir el titán enemigo situado en cada una de las bases. Cada jugador se pone en la piel de un dios de diferentes mitologías el cual posee distintos poderes y características. En el campo de batalla también se pueden encontrar personajes no controlados (súbditos) que proporcionan oro y experiencia.',
		img: Smite,
		playedYear: 2014,
		platforms: ['PC', 'XBOX']
	},
	{
		id: 'new-world',
		title: 'New World',
		description:
			'New World es un videojuego de rol multijugador masivo en línea desarrollado por Amazon Game Studios, con fecha de lanzamiento prevista para el 28 de septiembre.​ Su estreno fue anteriormente anunciado para agosto de 2020, tras haber sido a su vez retrasado desde la fecha inicial de mayo de 2020.​ Ambientado a mediados del siglo XVII, los jugadores tendrán la tarea de colonizar tierras modeladas a imagen y semejanza de la América Británica oriental.​ Los jugadores pueden hacerse con recursos, fabricar utensilios y luchar contra otros jugadores.',
		img: NewWorld,
		playedYear: 2021,
		platforms: ['PC']
	},
	{
		id: 'valorant',
		title: 'Valorant',
		description:
			'Valorant es un juego de disparos en primera persona en el que dos equipos de cinco jugadores se enfrentan entre ellos. Además de los consabidos tiros, el objetivo de las partidas es colocar un dispositivo llamado Spike en una zona concreta del mapa.',
		img: Valorant,
		playedYear: 2022,
		platforms: ['PC']
	}
]

export const LOL: Game = {
	id: 'lol',
	title: 'League of Legends',
	description:
		'League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género.',
	img: LeagueOfLegends,
	playedYear: 2020,
	platforms: ['PC']
}

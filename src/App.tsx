import { useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCard } from "./types/card.types"

const App = () => {
	console.log(cards)
	const [gameCards, setGameCards] = useState<TCardList[]>(cards)
	console.log(gameCards)
	return (
		<div className="main_section">
			<h1>Memory Game</h1>
			<div className="card_container">
				{cards.map((card: TCard) => (
					<CardComp key={card.id} />
				))}
			</div>
		</div>
	)
}

export default App

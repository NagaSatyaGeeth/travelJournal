import globePic from "/src/assets/globe.png";

export default function Header() {
	return (
		<header className=" h-12 bg-primary flex justify-center items-center">
			<img src={globePic} alt="Logo" className="m-2"></img>
			<div className="text-white font-bold">Places to go</div>
		</header>
	);
}

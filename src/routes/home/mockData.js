import ItemEntry from '../../shared/item-entry/ItemEntry';
import apple from "../../assets/apple.png";
import innout from '../../assets/innout.png';

export const mockSpecialItems = [    
    <ItemEntry id="innout" name="In-N-Out Burger" image={innout} price="3.45" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
]

export const mockTwelveItems = [
    <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />
];

export const mockTwelveDealItems = [
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />
];
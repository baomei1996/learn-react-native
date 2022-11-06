import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem({item}) {
    return <CategoryGridTile title={item.title}/>
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem}/>
}

export default CategoriesScreen;
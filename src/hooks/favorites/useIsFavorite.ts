import {useFavorite} from "src/hooks/favorites/useFavorite";

export function useIsFavorite(favoriteId: string){
    const favorite = useFavorite(favoriteId)
    return !!favorite
}

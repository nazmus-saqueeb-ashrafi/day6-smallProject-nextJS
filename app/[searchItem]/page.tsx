import { json } from "stream/consumers"
import getSearch from "../lib/getSearch"

type Params = {
    params : {
        searchItem : string
    }
}


export default async function SearchItemPage({params:{searchItem}} : Params) {

    const data : Promise<SearchResult> = getSearch(searchItem)
    const wikiPage = await data
    const results : Result[] | undefined = wikiPage?.query?.pages

  return (
    <>
        <div>{results ?
            Object.values(results).map((result)=>{
                return <p>{JSON.stringify(result)}</p>
            }) :
            <p>Not Found</p>
        }</div>
        
    </>
    
  )
}

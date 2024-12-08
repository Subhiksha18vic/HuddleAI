export async function getEmbedding(text: any) {
   const results = await fetch("http://127.0.0.1:1234/v1/embeddings", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       model: "text-embedding-nomic-embed-text-v1.5",
       input: text,
       encoding_format: "float",
     }),
   });

   return results.json()
}
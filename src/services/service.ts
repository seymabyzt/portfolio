
export async function getData() {
    const res = await fetch('http://localhost:8000/categories');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  
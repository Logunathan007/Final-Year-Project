const ApiRequest = async (api) => {
    try {
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        return result;
    } catch (e) {
        console.error("Error:", e);
        return {}; 
    }
};

export default ApiRequest;
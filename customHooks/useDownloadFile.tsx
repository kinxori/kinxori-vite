import { useState } from "react";


 const downloadCV = async () => {
    const [downloadUrl, setDownloadUrl] = useState("");
    try {
      const response = await fetch(
        `https://us-central1-myportfolio-70cb1.cloudfunctions.net/downloadFileFunction`,
        {
          mode: "no-cors",
          headers: {
              'Content-Type': 'application/gif'
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to download file");
      }
  
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  export default downloadCV
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FacebookPagesSelect from './components/FacebookPagesSelect';
import TextInput from './components/TextInput';
import ButtonSelect from './components/ButtonSelect';
import ImageUpload from './components/ImageUpload';
import './App.css';
import { AccountForm } from './components/AccountForm';
import { AccountSelector } from './components/AccountSelector';
import FacebookPostPreview from './components/FacebookPostPreview';

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  // Load accounts from the backend on component mount
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/getAccounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  const handleAccountSelect = (accountId) => {
    setSelectedAccountId(accountId);
  };
  const [selectedPage, setSelectedPage] = useState('');
  const [primaryText, setPrimaryText] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [displayLink, setDisplayLink] = useState('');
  const [linkDescription, setLinkDescription] = useState('');
  // Mock data for Facebook pages
  const pages = [
    { id: '1', name: 'Page 1' },
    { id: '2', name: 'Page 2' },
    // ... other pages
  ];

  // Mock data for Button options
  const buttonOptions = [
    { value: 'like', label: 'Like Page' },
    { value: 'learn_more', label: 'Learn More' },
    // ... other button options
  ];

  const [selectedButton, setSelectedButton] = useState(buttonOptions[0].value);

  // Handlers
  const handleImageUpload = (image) => {
    // Placeholder for image upload logic
    console.log('Image to upload:', image);
  };
  
  // States that will be used for the preview
  const [linkTitle, setLinkTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  // Post to Facebook 
  const postToFacebook = async () => {
    try {
      const response = await axios.post('http://localhost:3000/postToFacebook', {
        accessToken: 'user-access-token', // Ideally, this should be stored securely
        pageId: selectedPage,
        message: primaryText,
      });

      console.log('Post successful:', response.data);
    } catch (error) {
      console.error('Error posting to Facebook', error);
    }
  };


  // The UI of the app
  return (
    <div className="App">
      <h1>Facebook Page Post Creator</h1>
	  <AccountForm />
      {accounts.length > 0 && (
        <AccountSelector accounts={accounts} onSelect={handleAccountSelect} />
      )}
      <FacebookPagesSelect pages={pages} onSelect={setSelectedPage} />
      <TextInput label="Primary Text" value={primaryText} onChange={setPrimaryText} />
      <TextInput label="Card Title" value={cardTitle} onChange={setCardTitle} />
      <TextInput label="Website URL" value={websiteUrl} onChange={setWebsiteUrl} />
      <TextInput label="Display Link" value={displayLink} onChange={setDisplayLink} />
      <TextInput label="Link Description" value={linkDescription} onChange={setLinkDescription} />
      <ButtonSelect options={buttonOptions} onSelect={setSelectedButton} />
      <ImageUpload onUpload={handleImageUpload} />
	  <input type="text" value={primaryText} onChange={(e) => setPrimaryText(e.target.value)} />
       <FacebookPostPreview
        primaryText={primaryText}
        linkTitle={linkTitle}
        linkDescription={linkDescription}
        imageUrl={imageUrl}
      />
	  <button className="submit-button">Post to Facebook</button>
    </div>
  );
};

export default App;

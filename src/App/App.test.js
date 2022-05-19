import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

 test('Test that the choose page contains a link to the posts', () => {
    
        render(<Router><App /></Router>);
      
        const element = screen.getByText(/Austin Small Business/i)
      
        expect(element).toBeInTheDocument()
      });

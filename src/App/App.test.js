import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';


 test('Test that the choose page contains a link to the posts', () => {
    
        render(<Router><App /></Router>);
      
        const element = screen.getByText(/Read/i)
      
        expect(element).toBeInTheDocument()
      });

import { UserPost } from "./Components/UserPost";
import { render, screen, waitFor } from '@testing-library/react';
import { callApi } from "./utils";
import { act } from "react";

jest.mock('./utils');

describe('UserPost Component Testing', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('test title ', () => {
        render(<UserPost />);
        const titleElement = screen.getByText('PostByUser');
        expect(titleElement).toBeInTheDocument();
    }, 600)

    test('displays posts correctly', async () => {

        const mockPosts = [
            {
                id: 1,
                title: 'et ea vero quia laudantium autem'
            },
            {
                id: 2,
                title: 'in quibusdam tempore odit est dolorem'
            }
        ];
        
        callApi.mockResolvedValueOnce(mockPosts);
        await act(async () => {

            render(<UserPost />);
            await waitFor(() => {
                expect(screen.getByText('et ea vero quia laudantium autem')).toBeInTheDocument();
                expect(screen.getByText('in quibusdam tempore odit est dolorem')).toBeInTheDocument();
            });

        })

    })
});

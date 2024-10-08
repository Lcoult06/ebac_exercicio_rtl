import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve possuir dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Primeiro comentário teste '
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Segundo comentário teste '
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
});

import {GenreResponseProps} from '../App';
import { Button } from './Button';

interface ISideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onClick: (id: number) => void;
}

export function SideBar({genres, onClick, selectedGenreId}: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
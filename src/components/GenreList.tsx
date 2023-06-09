import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, isLoading, error } = useGenres(onSelectGenre);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack margin="15px">
            <Image
              boxSize="30px"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              objectFit="cover"
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              whiteSpace="normal"
              textAlign="left"
              fontSize={selectedGenre?.id === genre.id ? "lg" : "md"}
              colorScheme={selectedGenre?.id === genre.id ? "blue" : "gray"}
              justifyContent="flex-start"
              width="100%"
              p={0}
              mb={2}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

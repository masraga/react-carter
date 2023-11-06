import Paper from '../../atoms/paper';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import './index.css';

export type searchCompProps = {
  searchItem?: Array<{ url: string; name: React.ReactNode }>;
  searchIsShow: boolean;
  searchOnChange: any;
};

const SearchComponent = (props: searchCompProps) => {
  const { searchItem, searchIsShow, searchOnChange } = props;

  const SearchItemComp = () => {
    let items: Array<React.ReactNode> = [];
    let itemIndex = 0;

    if (!Array.isArray(searchItem)) {
      return items;
    }

    for (const item of searchItem) {
      items.push(
        <div className="item" key={`search-item-container-${itemIndex}`}>
          <Link href={item.url} color="inherit" key={`search-item-${itemIndex}`}>
            {item.name}
          </Link>
        </div>,
      );
      itemIndex++;
    }

    return items;
  };

  return (
    <div className="search-bar">
      <TextField
        id="outlined-start-adornment"
        sx={{ fontSize: 10 }}
        fullWidth={true}
        size="small"
        onChange={searchOnChange}
        placeholder="Cari seluruh sepeda disini..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          sx: {
            borderRadius: 0,
          },
        }}
      />
      <Paper
        className="search-item-box"
        square={true}
        elevation={1}
        style={{
          display: searchIsShow ? 'block' : 'block',
        }}
      >
        <SearchItemComp />
      </Paper>
    </div>
  );
};

export default SearchComponent;

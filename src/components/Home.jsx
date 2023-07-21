import React from "react";

import authService from "./../service/authService";
// import ProductCard from "./ProductCard";
import ItemList from "./ItemList";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Dolo 650",
    description: "Paracetemol tablets IP",
    imageUrl:
      "https://i1.wp.com/medigram.in/wp-content/uploads/2020/08/Dolo-650-Mg-tablet.png?fit=668%2C436&ssl=1",
  },
  {
    id: 2,
    name: "Colpol Syrup",
    description: "Paracetemol Pediatric Oral Suspension",
    imageUrl:
      "https://static2.medplusmart.com/products/_0add325_/CALP0003_L.jpg",
  },
  {
    id: 3,
    name: "Cofsils Syrup",
    description: "COFSILS DX Syrup 100ml",
    imageUrl:
      "https://www.netmeds.com/images/product-v1/600x600/1062701/cofsils_dx_cough_syrup_100ml_507078_0_0.jpg",
  },
  {
    id: 4,
    name: "Leeford leekuf Syrup",
    description: "Leeford leekuf Syrup",
    imageUrl: "https://m.media-amazon.com/images/I/71gauJHvnPS.jpg",
  },
  // Add more products here
];

export default function Home(props) {
  if (!authService.isLoggedIn()) {
    props.history.push("/login");
  }

  return (
    <>
      <div>
        <Header props={props} />
        {/* <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Global Medicals Online
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={"New"} color="secondary">
                  <GroupIcon style={{ paddingTop: 4 }} />
                  <Link
                    style={{ color: "#FFF", fontSize: 16, padding: "6px" }}
                    to="/users"
                  >
                    Our Customers
                  </Link>
                </Badge>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu} */}
      </div>
      {/* <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box> */}
      <ItemList />
      {/* <div className={classes.body_root}>
        <GridList cellHeight={180} className={classes.body_gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div"></ListSubheader>
          </GridListTile>
          {ImageContainer.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div> */}
    </>
  );
}

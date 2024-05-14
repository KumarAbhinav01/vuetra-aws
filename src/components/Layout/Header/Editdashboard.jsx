import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Backdrop,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Tooltip,
  alpha,
} from "@mui/material";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect1";
import { Close, Done, Search } from "@mui/icons-material";
import { cards } from "../../../static/header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
};

export default function Editdashboard() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCards, setSelectedCards] = React.useState([]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Tooltip title="Edit Dashboard">
        <HiOutlineSquaresPlus
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
          size={20}
        />
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: "24px", width: "100%" }}
          >
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography
                variant="heading"
                sx={{ whiteSpace: "nowrap", fontWeight: "500" }}
              >
                Widgets center
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <FormInput
                  sx={{
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.color.lightText, 0.17)}`,
                    background: (theme) => theme.palette.color.bg1,
                    px: "10px",
                    fontSize: "13px",
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search widgets"
                  startAdornment={
                    <InputAdornment position="end">
                      <Search
                        sx={{
                          fontSize: "20px",
                          color: (theme) => theme.palette.color.secondary,
                        }}
                      />
                    </InputAdornment>
                  }
                />
                <FormSelect
                  sx={{
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.color.lightText, 0.17)}`,
                    background: (theme) => theme.palette.color.bg1,
                    // minWidth: "80px",
                    width: "fit-content",
                    fontSize: "13px",
                  }}
                  options={[{ value: "all", label: "All" }]}
                  defaultValue="all"
                />
              </Stack>
            </Stack>
            <IconButton
              onClick={handleClose}
              sx={{
                color: (theme) => theme.palette.color.secondary,
                fontSize: "16px",
              }}
            >
              <Close />
            </IconButton>
          </Stack>
          <Divider sx={{ mb: "14px" }} />
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Stack>
                {["All", "Statistics", "Quick buttons", "Iframe"].map(
                  (item) => (
                    <Box
                      sx={{
                        width: "100%",
                        p: "10px 14px",
                        cursor: "pointer",
                        borderLeft: (theme) =>
                          `2px solid ${
                            item === value
                              ? theme.palette.color.primary
                              : "transparent"
                          }`,
                        transition: "all 300ms ease-in-out",
                        ...(item === value
                          ? {
                              background: (theme) => theme.palette.color.bg2,
                              borderRadius: "0 8px 8px 0",
                            }
                          : {
                              ":hover": {
                                opacity: "0.35",
                              },
                            }),
                      }}
                      onClick={() => setValue(item)}
                    >
                      <Typography
                        variant={
                          item === value ? "subtitle1_500" : "caption_500"
                        }
                      >
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Stack>
            </Grid>
            <Grid item xs={10}>
              <Stack
                spacing={2}
                sx={{
                  maxHeight: "70vh",
                  overflowY: "auto",
                  pr: "16px",
                  pb: "16px",
                }}
              >
                {cards.map((card) => (
                  <Stack spacing={0}>
                    <Typography variant="heading" sx={{ p: "8px", pb: "12px" }}>
                      {card.title}
                    </Typography>
                    <Grid container spacing={2} sx={{ pl: 1 }}>
                      {card.items
                        .filter((item) =>
                          item.title
                            .toLowerCase()
                            .trim()
                            .includes(search.toLowerCase().trim())
                        )
                        .map((item) => (
                          <Grid item xs={12} sm={6} md={4}>
                            <Card
                              sx={{
                                height: "132px",
                                background: (theme) =>
                                  selectedCards.includes(item.title)
                                    ? alpha(theme.palette.color.lightText, 0.1)
                                    : theme.palette.color.bg2,
                                border: (theme) =>
                                  `1px solid ${
                                    theme.palette.color[
                                      selectedCards.includes(item.title)
                                        ? "blue"
                                        : "bg2"
                                    ]
                                  }`,
                                transition: "all 500ms ease-in-out",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                if (selectedCards.includes(item.title)) {
                                  setSelectedCards(
                                    selectedCards.filter(
                                      (card) => card !== item.title
                                    )
                                  );
                                } else {
                                  setSelectedCards([
                                    ...selectedCards,
                                    item.title,
                                  ]);
                                }
                              }}
                            >
                              <Stack
                                spacing={1}
                                justifyContent="center"
                                alignItems="center"
                                sx={{ height: "100%" }}
                              >
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  alignItems="center"
                                >
                                  {selectedCards.includes(item.title) && (
                                    <Box
                                      sx={{
                                        background: (theme) =>
                                          theme.palette.color.lightText,
                                        borderRadius: "50%",
                                        width: "14px",
                                        height: "14px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Done
                                        sx={{
                                          fontSize: "8px",
                                          color: (theme) =>
                                            theme.palette.color.primary,
                                        }}
                                      />
                                    </Box>
                                  )}
                                  <Typography variant="heading">
                                    {item.title}
                                  </Typography>
                                </Stack>
                                {item.description && (
                                  <Typography variant="body3">
                                    Ask Vue Assistant anything
                                  </Typography>
                                )}
                              </Stack>
                            </Card>
                          </Grid>
                        ))}
                    </Grid>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
}

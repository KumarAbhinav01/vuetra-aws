import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import WestIcon from "@mui/icons-material/West";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import InfoIcon from "@mui/icons-material/Info";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { BsSquareHalf } from "react-icons/bs";
import FormInput from "../../../components/ui/FormInput";
import { toggleOpen } from "../../../slices/openModalSlice";
import { Done } from "@mui/icons-material";
import { TbMessageCircleCheck } from "react-icons/tb";

const ViewPayout = () => {
  const [page, setPage] = React.useState(0);
  const { open } = useSelector((state) => state.openModal);
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();

  console.log(page === 2, page);

  return (
    <React.Fragment>
      <Drawer
        sx={
          {
            // borderRadius: "14px 0 14px 0",
            // overflow: "hidden",
          }
        }
        open={open}
        onClose={() => {
          dispatch(toggleOpen());
          setPage(0);
          setComment("");
        }}
        anchor="right"
      >
        <Paper
          sx={{
            width: "674px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.paper,
          }}
        >
          <Box
            sx={{
              height: "50px",
              background: (theme) => theme.palette.color.bg3,
              p: "18px",
            }}
          >
            <Stack direction="row" spacing={0} sx={{}}>
              <IconButton
                onClick={() => {
                  dispatch(toggleOpen());
                  setPage(0);
                  setComment("");
                }}
              >
                <WestIcon
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                    fontSize: "16px",
                  }}
                />
              </IconButton>
              <IconButton>
                <OpenInFullIcon
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                    fontSize: "16px",
                  }}
                />
              </IconButton>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <BsSquareHalf size={14} />
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{
              height: "calc(100vh - 130px)",
              overflowY: "auto",
            }}
          >
            {page === 0 && <Page1 />}
            {page === 1 && <Page2 />}
            {page === 2 && <Page3 />}
            <Stack
              sx={{
                width: "100%",
                background: (theme) => theme.palette.color.bg2,
                pt: "24px",
                px: "24px",
              }}
              spacing={2}
            >
              {page === 0 && (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      background: (theme) => theme.palette.color.bg3,
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography
                    variant="body3"
                    sx={{
                      "& span": {
                        color: (theme) => theme.palette.color.primary,
                      },
                    }}
                  >
                    <span>User requested payout</span> about 1 hour ago
                  </Typography>
                </Stack>
              )}
              {page === 2 && (
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: "28px",
                        height: "28px",
                        background: (theme) =>
                          alpha(theme.palette.color.green, 0.15),
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Done
                        sx={{
                          fontSize: "14px",
                          color: (theme) => theme.palette.color.green,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body3"
                      sx={{
                        "& span": {
                          color: (theme) => theme.palette.color.primary,
                        },
                      }}
                    >
                      <span>Mail</span> sucessfully sended{" "}
                      <span>by system</span>
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: "28px",
                        height: "28px",
                        background: (theme) => theme.palette.color.primary,
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography
                      variant="body3"
                      sx={{
                        "& span": {
                          color: (theme) => theme.palette.color.primary,
                        },
                      }}
                    >
                      <span>Payout reject</span> about 1 hour ago{" "}
                      <span>by admin</span> for reason:
                      <span> "{comment}"</span>
                    </Typography>
                  </Stack>
                </Stack>
              )}
              <Box
                sx={{
                  width: "100%",
                  background: (theme) => theme.palette.color.bg3,
                  pt: "12px",
                  px: "12px",
                }}
              >
                <FormInput
                  placeholder="Leave comment"
                  sx={{
                    borderRadius: "24px 24px 0  0 ",
                    ":focus-within": {
                      border: "1px solid transparent",
                    },
                  }}
                  value={comment}
                  onChange={(e) => {
                    if (page !== 2) setComment(e.target.value);
                  }}
                />
              </Box>
            </Stack>
          </Box>

          <Grid
            container
            spacing={1}
            sx={{
              padding: "16px 32px",
              background: (theme) => "transparent",
              position: "sticky",
              height: "80px",
              bottom: 0,
            }}
          >
            <Grid item xs={4}>
              <Button
                fullWidth
                sx={{
                  background: (theme) =>
                    alpha(
                      theme.palette.color[page === 0 ? "red" : "secondary"],
                      0.15
                    ),
                  color: (theme) =>
                    theme.palette.color[page === 0 ? "red" : "secondary"],
                  borderRadius: "9px",
                  ":hover": {
                    background: (theme) =>
                      alpha(
                        theme.palette.color[page === 0 ? "red" : "secondary"],
                        0.15
                      ),
                  },
                }}
                onClick={() => {
                  if (page === 0) {
                    setPage(1);
                  } else {
                    dispatch(toggleOpen());
                    setPage(0);
                    setComment("");
                  }
                }}
              >
                {page === 0 ? "Reject" : "Cancel"}
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                fullWidth
                sx={{
                  boxShadow: "none",
                  ...(page === 0 && {
                    background: (theme) =>
                      alpha(theme.palette.color.green, 0.15),
                    color: (theme) => theme.palette.color.green,
                    ":hover": {
                      background: (theme) =>
                        alpha(theme.palette.color.green, 0.15),
                    },
                  }),
                  borderRadius: "9px",
                }}
                variant="contained"
                onClick={() => {
                  if (page === 1) {
                    setPage(2);
                  } else {
                    dispatch(toggleOpen());
                    setPage(0);

                    setComment("");
                  }
                }}
                disabled={page === 2}
              >
                {page === 0 && " Approve"}
                {page === 1 && "Confirm"}
                {page === 2 && "Change status"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
};

const Page1 = () => {
  return (
    <Box
      sx={{
        px: "18px",
        pb: "48px",
        pt: "12px",
      }}
    >
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          color: (theme) => theme.palette.color.secondary,
          "& span": {
            color: (theme) => theme.palette.color.primary,
            mr: "8px",
            ml: "4px",
          },
        }}
      >
        Date of request: <span>5/6/2024</span> UTC: <span>+1</span>
      </Typography>
      <Stack
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: "18px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.yellow,
            }}
          ></Box>
          <Typography
            variant="h4"
            sx={{
              transition: "all 0.3s",
              cursor: "pointer",
              ":hover": {
                opacity: 0.35,
                textDecoration: "underline",
              },
            }}
          >
            Customer name
          </Typography>
        </Stack>
        <Typography
          variant="h4"
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontWeight: "500",
          }}
        >
          $8,000.00
        </Typography>
      </Stack>
      <Stack spacing={3} sx={{ mt: "48px" }}>
        <Stack spacing={0.7}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <InfoIcon
              sx={{
                color: (theme) => theme.palette.color.secondary,
                fontSize: "16px",
              }}
            />
            <Typography variant="caption">Information</Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              {
                label: "Client name",
                value: "Name customer",
              },
              {
                label: "Trading account:",
                value: "1055035",
              },
              {
                label: "Profit share:",
                value: "80%",
              },
              {
                label: "Profit: ",
                value: "$10,000.00",
              },
              {
                label: "Profit firm:",
                value: "$2,000.00",
              },
              {
                label: "Profit client:",
                value: "$8,000.00",
              },
            ].map((item) => (
              <Grid key={item.label} item xs={6}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="caption" sx={{ fontWeight: "400" }}>
                    {item.label}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "400", mr: "12px" }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Divider />
        <Stack spacing={0.7}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <PersonOutlineIcon
              sx={{
                color: (theme) => theme.palette.color.secondary,
                fontSize: "16px",
              }}
            />
            <Typography variant="caption">Overview</Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              {
                label: "Balance:",
                value: "$110,000.00",
              },
              {
                label: "Equity:",
                value: "$110,000.00",
              },
              {
                label: "Open trades:",
                value: "None",
              },
              {
                label: "IP Adress: ",
                value: "1.210.50.15",
              },
              {
                label: "Verified:",
                value: "Yes",
              },
              {
                label: "Method:",
                value: "Rise",
              },
            ].map((item) => (
              <Grid key={item.label} item xs={6}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        borderRadius: "50%",
                        background: (theme) =>
                          alpha(theme.palette.color.green, 0.15),
                        padding: "3px",
                      }}
                    >
                      <Done
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.color.green,
                        }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ fontWeight: "400" }}>
                      {item.label}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "400", mr: "12px" }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

const Page2 = () => {
  return (
    <Box
      sx={{
        height: "85%",
        px: "18px",
        pb: "48px",
        background: "transparent",
      }}
    >
      <Stack
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: "18px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.red,
            }}
          ></Box>
          <Typography variant="h4">Reject payout request</Typography>
        </Stack>
        <Typography
          variant="h6"
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontWeight: "500",
          }}
        >
          Account number
        </Typography>
      </Stack>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            maxWidth: "500px",
          }}
        >
          <TbMessageCircleCheck size={32} />
          <Typography variant="h4">Leave a comment</Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: "400", textAlign: "center" }}
          >
            We recommend to leave a comment for the customer. They will see this
            in their dashboard and it will automatically send an email. You can
            finalize the rejection by clicking confirm.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Page3 = () => {
  return (
    <Box
      sx={{
        height: "70%",
        px: "18px",
        pb: "48px",
        background: "transparent",
      }}
    >
      <Stack
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: "18px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.red,
            }}
          ></Box>
          <Typography variant="h4">Payout rejected</Typography>
        </Stack>
        <Typography
          variant="h6"
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontWeight: "500",
          }}
        >
          Account number
        </Typography>
      </Stack>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            maxWidth: "500px",
          }}
        >
          <Box
            sx={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              background: (theme) => alpha(theme.palette.color.green, 0.15),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Done
              sx={{
                fontSize: "22px",
                color: (theme) => theme.palette.color.green,
              }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: (theme) => theme.palette.color.green,
            }}
          >
            Payout reject successfuly
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: "400", textAlign: "center" }}
          >
            We have let customer know their payout is rejected
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ViewPayout;

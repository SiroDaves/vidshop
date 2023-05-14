import Link from "next/link"
import Image from "next/image"
import { IoHeart } from "react-icons/io5"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import React, { memo, useEffect, useState } from "react"
import { FaCommentDots, FaShare, FaMusic } from "react-icons/fa"

import { Product } from '../../interfaces/product'
import Video from '../../components/items/video'
import styles from "../../styles/Video.module.scss"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function HomeVideo({ product }: { product: Product }) {
  const [content, setContent] = useState(product);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <div className="mt-3" onClick={handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {content.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Buy this item for Kshs. {content.price}
          </Typography>
          <Button onClick={handleClose}>Buy Now</Button>
        </Box>
      </Modal>

      {/* user user action */}
      <div className="flex flex-wrap">

        {/* user info */}
        <div className="flex-grow">
          <div className="flex flex-wrap">

            {/* user avatar */}
            <Image className="rounded-full mx-2" src="/images/user.png" alt="" width="50" height="50" />
            <div className="flex-grow">
              <Link href="/" className="flex-grow">
                <h3 className="text-bold">johndoe</h3>
                <h3 className="">John Doe</h3>
              </Link>
            </div>
          </div>
        </div>

        {/* user follow button */}
        <button className="px-4 py-2 mx-2 font-semibold text-sm bg-sky-500 text-white rounded shadow-sm h-8">
          FOLLOW
        </button>
      </div>

      <span className="ml-16">{content.title}</span>

      {/* video */}
      <div className="mx-auto">

        <div className={styles.video_wrapper}>
          <Link href="/">
            <div className={styles.video_card}>
              <Video data={content} />
            </div>
          </Link>
          <div className={styles.action_items}>
            <div className={styles.action_button}>
              <div className={styles.icon} >
                <IoHeart />
              </div>
              <strong className={styles.count}>{content.likes}</strong>
            </div>

            <Link href="#" >
              <div className={styles.action_button}>
                <div className={styles.icon}>
                  <FaCommentDots />
                </div>
                <strong className={styles.count}>
                  {content.comments}
                </strong>
              </div>
            </Link>

            <div className={styles.action_button}>
              <div className={styles.menu_share}>
                <div className={styles.icon}>
                  <FaShare />
                </div>
              </div>
              <strong className={styles.count}>{content.views}</strong>
            </div>
          </div>
        </div>

      </div>
      <hr className="border-t border-gray-300 my-8" />
    </div>


  )
}

export default HomeVideo

import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

const SearchPage = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="search-page">
      <button className="search-page-btn" onClick={onOpenModal}>
        <AiOutlineSearch />
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        style={{
          width: "100%",
          background:"rgba(255, 255, 255, 0.9)"
        }}
      >
        <div className="search-model">
          <div className="w-50">
            <p>Start typing and press Enter to search</p>
            <div className="input-search ">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" />
              </InputGroup>
              <AiOutlineSearch className="icon" />
            </div>
          </div>
        </div>
      </Modal>
    
    </div>
  );
};

export default SearchPage;

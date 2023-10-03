import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";
export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(
          //action has been dispatch which in turns triggers action creator to fetchdatabygenre
          // asynchronus api call will be made to fetch data then that data would be passed to reducer to update state
          fetchDataByGenre({
            //action creater
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;

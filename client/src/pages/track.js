import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      description
      numberOfViews
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  console.log("DATA: ", data);
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;

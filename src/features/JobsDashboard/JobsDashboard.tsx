import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "z/../ace-builds/src-noconflict/mode-python";
import "z/../ace-builds/src-noconflict/theme-github";
import {
  Button,
  Content,
  Details,
  JobStatus,
  JobTitle,
  Row,
  Section,
  SectionTitle,
  Sidebar,
  SidebarJobStatus,
  SidebarJobWrapper,
  SpreadRow,
  Tag,
  Wrapper,
} from "./JobsDashboard.styles";

const JobsDashboard = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const jobId = id || "1";

  const [jobResults, setJobResults] = useState<
    {
      id: string | undefined;
      error: boolean;
      singleLine: string;
    }[]
  >([]);

  const [jobs, setJobs] = useState<
    {
      id: string | undefined;
      codeRaw: string | undefined;
      status: string;
    }[]
  >([]);

  const fetchJobs = async () => {
    const request = await fetch(`/api/v1/jobs`);
    const json = await request.json();
    setJobs(json.jobs);
  };

  const fetchJobResults = async (id: string | undefined) => {
    const request = await fetch(`/api/v1/jobs/${id}/results`);
    const json = await request.json();
    setJobResults(json.results);
  };

  const [response, setResponse] = useState({
    output: "",
  });

  const [code, setCode] = useState("");

  const runJob = async (_: any) => {
    const response = await fetch(
      `http://localhost:3030/api/v1/jobs/${jobId}/run`,
      {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      }
    );

    const json = await response.json();

    setResponse(json);
  };

  useEffect(() => {
    fetchJobResults(jobId);
    (async () => {
      await fetchJobs();
      console.log(jobs);
    })();
  }, [jobId]);

  useEffect(() => {
    setCode(jobs.filter((job) => job.id == jobId)[0]?.codeRaw || "");
  }, [jobId, jobs]);

  return (
    <Wrapper>
      <Sidebar>
        {jobs.map((job) => (
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            to={`/jobs/${job.id}`}
          >
            <SidebarJobWrapper status={JobStatus.INACTIVE}>
              <SidebarJobStatus status={JobStatus.INACTIVE} />
              Job {job.id}
            </SidebarJobWrapper>
          </Link>
        ))}
      </Sidebar>
      <Content>
        <SpreadRow>
          <Row>
            <JobTitle>Job {jobId}</JobTitle>
            <Tag>INACTIVE</Tag>
          </Row>
          <Button onClick={runJob}>Run Job</Button>
        </SpreadRow>
        <Details>
          <Section>
            <SectionTitle>Job Code</SectionTitle>
            <Section>
              <AceEditor
                style={{ width: "100%" }}
                mode="python"
                theme="github"
                onChange={(value) => setCode(value)}
                value={code}
                name="code_editor"
                editorProps={{ $blockScrolling: true }}
              />
            </Section>
          </Section>
          <Section>
            <SectionTitle>Log</SectionTitle>
            <Section>
              {response.output
                .replaceAll("\\t", "\t")
                .split("\\n")
                .map((item) => (
                  <p>{item}</p>
                ))}
            </Section>
          </Section>
          <Section>
            <SectionTitle>Past Results</SectionTitle>
            {jobResults.map((item) => (
              <p>{item.singleLine}</p>
            ))}
          </Section>
        </Details>
      </Content>
    </Wrapper>
  );
};

export default JobsDashboard;

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey =  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey);

export const createOKR = async (okr) => {
  const { data, error } = await supabase.from("okrs").insert([{ ...okr }]);
  return { data, error };
};

export const getOKRs = async () => {
  const { data, error } = await supabase.from("okrs").select("*");
  return { data, error };
};

export const updateOKR = async (id, updates) => {
  const { data, error } = await supabase
    .from("okrs")
    .update(updates)
    .eq("id", id);
  return { data, error };
};

export const deleteOKR = async (id) => {
  const { data, error } = await supabase.from("okrs").delete().eq("id", id);
  return { data, error };
};

export const updateProgress = async (id) => {
  const { data: okr, error } = await supabase
    .from("okrs")
    .select("key_results")
    .eq("id", id)
    .single();

  if (error) return { error };

  const keyResults = okr.key_results;
  const progress =
    keyResults.reduce((acc, kr) => acc + kr.progress, 0) / keyResults.length;

  return updateOKR(id, { progress });
};
